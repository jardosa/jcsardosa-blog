
import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema  } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      const message = error.errors.reduce((acc: string, curr) => {
        console.log(curr.message)
        return acc + curr.message + ' \n'
      },'')

      console.log(message)

      throw new BadRequestException(message);
    }
  }
}
