export const isCurrentYear = (date: Date): boolean =>
  date.getFullYear() === new Date().getFullYear()

export const rehydrateDate = (dateString: string): Date => new Date(dateString)
