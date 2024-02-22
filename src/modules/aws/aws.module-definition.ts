// config.module-definition.ts
import { ConfigurableModuleBuilder } from "@nestjs/common";

export type AWSConfigModuleOptions = {
    S3_BUCKET: string;
};

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN: AWS_MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<AWSConfigModuleOptions>().build();
