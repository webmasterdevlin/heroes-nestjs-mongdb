import { ApiModelProperty } from '@nestjs/swagger';
export class CreateVillainDto {
  @ApiModelProperty()
  readonly firstName: string;
  @ApiModelProperty()
  readonly lastName: string;
  @ApiModelProperty()
  readonly house: string;
  @ApiModelProperty()
  readonly knownAs: string;
}
