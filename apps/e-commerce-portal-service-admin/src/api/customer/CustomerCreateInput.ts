import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { JobOrderCreateNestedManyWithoutCustomersInput } from "./JobOrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  jobOrders?: JobOrderCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  subscriptionDate?: Date | null;
};
