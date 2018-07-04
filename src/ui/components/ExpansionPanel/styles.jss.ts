
import { transitionFaster, typoGroupHeading } from '../Styles';

export const styles = {
  expansionPanelHeader: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',

    width: '100%',
    textAlign: 'left',
    appearance: 'none',
    border: '0',
    background: 'none',

    outline: 'none',

    padding: '12px 0',

    cursor: 'pointer',
  },

  expansionPanelHeaderTitle: {
    ...typoGroupHeading(),

    display: 'flex',
    flex: '1',
    alignItems: 'center',
  },

  expansionPanelIcon: {
    ...transitionFaster('transform'),

    display: 'flex',
    alignItems: 'center',

    width: '14px',
    height: '14px',

    transform: 'scaleY(1)',
  },

  expansionPanelActive: {
    transform: 'scaleY(1)',

    '$expansionPanelBody': {
      display: 'block',
    },
  },

  expansionPanelBody: {
    display: 'none',

    padding: '12px 0',
  },
};
