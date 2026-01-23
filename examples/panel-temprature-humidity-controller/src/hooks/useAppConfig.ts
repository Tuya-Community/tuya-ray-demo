import { IConfig, useConfig } from "@ray-js/components-ty-config-provider";

export interface AppConfig extends IConfig {
    primaryColor: string;
    tabBar: {
        textColor: string;
        selectedColor: string;
        backgroundColor: string;
    }
}

export const useAppConfig = () => useConfig() as AppConfig;