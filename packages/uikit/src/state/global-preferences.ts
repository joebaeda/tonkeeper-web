import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AppKey } from '@tonkeeper/core/dist/Keys';
import { useAppSdk } from '../hooks/appSdk';
import { QueryKey } from '../libs/queryKey';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GlobalPreferences {}

const defaultGlobalPreferences: GlobalPreferences = {};

export const useGlobalPreferencesQuery = () => {
    const sdk = useAppSdk();
    return useQuery(
        [QueryKey.globalPreferencesConfig],
        async () => {
            const data = await sdk.storage.get<Partial<GlobalPreferences>>(
                AppKey.GLOBAL_PREFERENCES_CONFIG
            );
            if (!data) {
                return defaultGlobalPreferences;
            }
            return { ...defaultGlobalPreferences, ...data };
        },
        {
            keepPreviousData: true
        }
    );
};

export const useGlobalPreferences = () => {
    const { data } = useGlobalPreferencesQuery();
    if (!data) {
        throw new Error('No global preferences');
    }
    return data;
};

export const useMutateGlobalPreferences = () => {
    const sdk = useAppSdk();
    const client = useQueryClient();
    return useMutation<void, Error, Partial<GlobalPreferences>>(async preferences => {
        const current = await sdk.storage.get<GlobalPreferences>(AppKey.GLOBAL_PREFERENCES_CONFIG);
        await sdk.storage.set(AppKey.GLOBAL_PREFERENCES_CONFIG, { ...current, ...preferences });
        await client.invalidateQueries([QueryKey.globalPreferencesConfig]);
    });
};
