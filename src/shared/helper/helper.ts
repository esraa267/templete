export function IsNullOrEmptyString(value: string): boolean {
    return value == null || value === '' || value.length === 0;
  }