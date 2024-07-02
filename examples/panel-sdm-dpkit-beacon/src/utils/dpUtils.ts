export const getDpIdByCode = (dpCode: string, schema: any): number | null => {
  if (Array.isArray(schema)) {
    const schemaRes = schema.find(i => i.code === dpCode);
    return schemaRes?.id;
  }
  if (!schema) {
    return null;
  }
  if (typeof dpCode === 'string') {
    if (!schema[dpCode]) {
      return null;
    }
    return schema[dpCode].id;
  }
  return null;
};
