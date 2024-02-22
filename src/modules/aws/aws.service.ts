import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import awsConfiguration from "src/config/aws.configuration";
import * as AWS from "aws-sdk";
import { AWSConfigModuleOptions, AWS_MODULE_OPTIONS_TOKEN } from "./aws.module-definition";

@Injectable()
export class AwsService {
    S3: AWS.S3;
    constructor(
        @Inject(AWS_MODULE_OPTIONS_TOKEN)
        private awsOptions: AWSConfigModuleOptions,
        @Inject(awsConfiguration.KEY)
        private configService: ConfigType<typeof awsConfiguration>,
    ) {
        this.S3 = new AWS.S3({
            accessKeyId: this.configService.accessKeyId,
            secretAccessKey: this.configService.secretAccessKey,
            region: this.configService.region,
        });
    }

    async S3_UPLOAD(file: Buffer, name: string, mimetype: string) {
        return await this.S3.upload({
            Bucket: this.awsOptions.S3_BUCKET,
            Key: String(name),
            Body: file,
            ContentType: mimetype,
        }).promise();
    }
}
