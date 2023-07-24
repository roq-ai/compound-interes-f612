const mapping: Record<string, string> = {
  'compound-interests': 'compound_interest',
  'customer-requests': 'customer_request',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
