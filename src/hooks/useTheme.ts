import {useMemo} from 'react';
import {theme, ThemeColors} from '../constants'; // Adjust the path to the actual file where `theme` is defined

// Reuse the ThemeColors type here
export const useTheme = (): ThemeColors => {
    return useMemo(() => theme, []); // Ensure proper typing is preserved
};

export default useTheme;

