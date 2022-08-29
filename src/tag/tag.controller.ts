import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TagService} from "./tag.service";
import {Tag} from "./tag.model";
import {CreateTagDto} from "./dto/create-tag.dto";
import {GetTagDto} from "./dto/get-tag.dto";

@Controller('tags')
export class TagController {
  constructor(
    private readonly tagService: TagService
  ) {}

  @Get()
  public async getTags(): Promise<Tag[]> {
    return await this.tagService.getTags();
  }

  @Post()
  public async addTag(@Body() createTagDto: CreateTagDto): Promise<GetTagDto> {
    return await this.tagService.addTag(createTagDto);
  }

  @Delete(':id')
  public async removeTag(@Param('id') id: string): Promise<void> {
    return await this.tagService.removeTag(id);
  }
}