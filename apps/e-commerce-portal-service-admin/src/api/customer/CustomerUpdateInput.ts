import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { JobOrderUpdateManyWithoutCustomersInput } from "./JobOrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  jobOrders?: JobOrderUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  subscriptionDate?: Date | null;
};
