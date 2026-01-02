import { Request, Response, NextFunction } from "express";
import { env } from "../config/env.js";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Acessa o campo de autorização do header da requisição
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não informado!",
    });
  }

  // Separa o Bearer e o JWT enviado no header
  const [scheme, token] = authHeader.split(" ");

  if (scheme != "Bearer" || !token) {
    return res.status(401).json({
      message: "Token mal informado!",
    });
  }

  try {
    // Decodifica o token
    const decoded = jwt.verify(token, env.jwtsecret) as JwtPayload;

    req.user = {
      id: decoded.id as string,
    };

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Token inválido ou expirado!",
    });
  }
}
