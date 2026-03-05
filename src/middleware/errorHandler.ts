import { validate as isUuid } from "uuid";
import { Request, Response, NextFunction } from "express";

export const validateCreateUser = (req: Request,
  res: Response,
  next: NextFunction) => {
  const { login, password } = req.body;

  if (
    !login ||
    !password ||
    typeof login !== 'string' ||
    typeof password !== 'string'
  ) {
    return res.status(400).json({ message: 'Invalid body' });
  }

  next();
};

export const validateUserId = (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  if (!isUuid(req.params.id)) {
    return res.status(400).json({
      message: "Invalid userId. It must be a valid UUID",
    });
  }

  next();
};

export const validateTrackId = (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  if (!isUuid(req.params.id)) {
    return res.status(400).json({
      message: "Invalid trackId. It must be a valid UUID",
    });
  }

  next();
};

export const validateCreateTrack = (req: Request,
  res: Response,
  next: NextFunction) => {
  const { name, duration } = req.body;

  if (

    !name ||
    !duration ||
    typeof name !== 'string' ||
    typeof duration !== 'number'
  ) {
    return res.status(400).json({ message: 'Invalid body' });
  }

  next();
};