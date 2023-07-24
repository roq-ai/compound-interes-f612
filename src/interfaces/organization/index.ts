import { CompoundInterestInterface } from 'interfaces/compound-interest';
import { CustomerRequestInterface } from 'interfaces/customer-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  compound_interest?: CompoundInterestInterface[];
  customer_request?: CustomerRequestInterface[];
  user?: UserInterface;
  _count?: {
    compound_interest?: number;
    customer_request?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
