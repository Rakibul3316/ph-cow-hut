import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { IOrder } from "./order.interface";
import { OrderServices } from "./order.service";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import { orderFilterableFields } from "./order.constant";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...orderData } = req.body;
  const result = await OrderServices.createOrderToDB(orderData);

  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    meta: null,
    message: "Order created successfully!",
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, orderFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await OrderServices.getAllOrdersFromDB(
    filters,
    paginationOptions
  );

  sendResponse<IOrder[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrived Order data",
    meta: result.meta,
    data: result.data,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
