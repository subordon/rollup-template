export const keys = (val: Record<string, unknown>): any[] => Object.keys(val)

/**
 *返回不包含props key的数据
 * @param obj
 * @param props
 * @returns
 */
export const omit = (obj: Record<string, unknown>, props: any[]) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !props.includes(key))
  )

/**
 * 获取对象中指定key
 * @param obj
 * @param props
 * @returns
 */
export const pick = (obj: Record<string, unknown>, props: any[]) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => props.includes(key)))
