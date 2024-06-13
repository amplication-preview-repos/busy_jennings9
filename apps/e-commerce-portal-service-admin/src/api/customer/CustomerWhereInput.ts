import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobOrderListRelationFilter } from "../jobOrder/JobOrderListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  jobOrders?: JobOrderListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  subscriptionDate?: DateTimeNullableFilter;
};
