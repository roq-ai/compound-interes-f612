import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CompoundInterestInterface {
  id?: string;
  interest_rate: number;
  principal_amount: number;
  time_period: number;
  compounding_frequency: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface CompoundInterestGetQueryInterface extends GetQueryInterface {
  id?: string;
  compounding_frequency?: string;
  organization_id?: string;
}
