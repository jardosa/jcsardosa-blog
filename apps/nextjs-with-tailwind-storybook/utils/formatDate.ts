
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

const formatDate = (date: Date | string) => {
  return dayjs(date).format('LLL')
}

export default formatDate