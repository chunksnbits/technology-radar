
import { uuid } from 'utils/uuid';

export const defaultTechnology = (group: Group, id: string = uuid()): Technology => ({
  id,
  name: '* New *',
  description: '',
  logo: '',
  groupId: group.id,
  level: 0
});

export const defaultGroup = (group: number, id: string = uuid()) => ({
  name: '* New *',
  id,
  group,
  description: '',
  color: '#FF0000'
});
