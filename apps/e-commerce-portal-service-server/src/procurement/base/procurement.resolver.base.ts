/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Procurement } from "./Procurement";
import { ProcurementCountArgs } from "./ProcurementCountArgs";
import { ProcurementFindManyArgs } from "./ProcurementFindManyArgs";
import { ProcurementFindUniqueArgs } from "./ProcurementFindUniqueArgs";
import { CreateProcurementArgs } from "./CreateProcurementArgs";
import { UpdateProcurementArgs } from "./UpdateProcurementArgs";
import { DeleteProcurementArgs } from "./DeleteProcurementArgs";
import { JobOrder } from "../../jobOrder/base/JobOrder";
import { ProcurementService } from "../procurement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Procurement)
export class ProcurementResolverBase {
  constructor(
    protected readonly service: ProcurementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Procurement",
    action: "read",
    possession: "any",
  })
  async _procurementsMeta(
    @graphql.Args() args: ProcurementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Procurement])
  @nestAccessControl.UseRoles({
    resource: "Procurement",
    action: "read",
    possession: "any",
  })
  async procurements(
    @graphql.Args() args: ProcurementFindManyArgs
  ): Promise<Procurement[]> {
    return this.service.procurements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Procurement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Procurement",
    action: "read",
    possession: "own",
  })
  async procurement(
    @graphql.Args() args: ProcurementFindUniqueArgs
  ): Promise<Procurement | null> {
    const result = await this.service.procurement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Procurement)
  @nestAccessControl.UseRoles({
    resource: "Procurement",
    action: "create",
    possession: "any",
  })
  async createProcurement(
    @graphql.Args() args: CreateProcurementArgs
  ): Promise<Procurement> {
    return await this.service.createProcurement({
      ...args,
      data: {
        ...args.data,

        jobOrder: args.data.jobOrder
          ? {
              connect: args.data.jobOrder,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Procurement)
  @nestAccessControl.UseRoles({
    resource: "Procurement",
    action: "update",
    possession: "any",
  })
  async updateProcurement(
    @graphql.Args() args: UpdateProcurementArgs
  ): Promise<Procurement | null> {
    try {
      return await this.service.updateProcurement({
        ...args,
        data: {
          ...args.data,

          jobOrder: args.data.jobOrder
            ? {
                connect: args.data.jobOrder,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Procurement)
  @nestAccessControl.UseRoles({
    resource: "Procurement",
    action: "delete",
    possession: "any",
  })
  async deleteProcurement(
    @graphql.Args() args: DeleteProcurementArgs
  ): Promise<Procurement | null> {
    try {
      return await this.service.deleteProcurement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => JobOrder, {
    nullable: true,
    name: "jobOrder",
  })
  @nestAccessControl.UseRoles({
    resource: "JobOrder",
    action: "read",
    possession: "any",
  })
  async getJobOrder(
    @graphql.Parent() parent: Procurement
  ): Promise<JobOrder | null> {
    const result = await this.service.getJobOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
