
import { zIndex, stripUnit } from '../../../../components/Styles';
import { itemSize } from '../../../../components/GroupIndicator/styles.jss';

export const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '50%',
    height: '1px',
    transformOrigin: 0,
    pointerEvents: 'none',
  },
  technologyItemItem: {
    position: 'absolute',
    top: -0.5 * stripUnit(itemSize(theme)),
    right: -0.5 * stripUnit(itemSize(theme)),
    zIndex: zIndex.technoloogyRadarItem,
    pointerEvents: 'all',
    cursor: 'pointer',
  },
});
