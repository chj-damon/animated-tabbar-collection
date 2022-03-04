/* eslint-disable replace-hooks/no-forbidden-hooks */
import { createContext, useState } from 'react';
import { MultiBarContextProps, MultiBarOverlayProps } from './types';

export const MultiBarContext = createContext<MultiBarContextProps>({} as MultiBarContextProps);

type Props = Pick<MultiBarContextProps, 'data'> & {
  initialOverlayVisible?: boolean;
  overlayProps?: MultiBarOverlayProps;
};

export const MultiBarProvider: React.FC<Props> = ({ children, data, initialOverlayVisible = false, overlayProps }) => {
  const [overlayVisible, setOverlayVisible] = useState(initialOverlayVisible);

  return (
    <MultiBarContext.Provider
      value={{
        data,
        overlayVisible,
        setOverlayVisible,
        overlayProps,
      }}
    >
      {children}
    </MultiBarContext.Provider>
  );
};
