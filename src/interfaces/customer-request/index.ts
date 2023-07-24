import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CustomerRequestInterface {
  id?: string;
  request_period: string;
  customer_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface CustomerRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  request_period?: string;
  customer_id?: string;
  organization_id?: string;
}
