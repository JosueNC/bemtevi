export interface ResponseModel {
  data: any;
  message: string;
  success: boolean;
  error: {
    message: string;
  };
}
