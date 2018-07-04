
import { zIndex, stripUnit } from 'core/ui/components/Styles';
import { groupIndicatorSize } from 'core/ui/components/GroupIndicator/styles.jss';

export const styles = {
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
    top: -0.5 * stripUnit(groupIndicatorSize),
    right: -0.5 * stripUnit(groupIndicatorSize),
    zIndex: zIndex.technoloogyRadarItem,
    pointerEvents: 'all',
    cursor: 'pointer',
  },
}