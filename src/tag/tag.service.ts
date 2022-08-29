import { InjectModel } from "@nestjs/mongoose";
import {Tag, TagDocument} from "./tag.model";
import {Model} from "mongoose";
import {CreateTagDto} from "./dto/create-tag.dto";
import {GetTagDto} from "./dto/get-tag.dto";
import {HttpException, Injectable} from "@nestjs/common";

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name) private readonly tags: Model<TagDocument>
  ) {}

  public async addTag(createTagDto: CreateTagDto): Promise<GetTagDto> {
    const newTag: TagDocument = await this.tags.create(createTagDto);
    return this.convertTagDocumentToGetTagDto(newTag);
  }

  public async getTags(): Promise<GetTagDto[]> {
    const tags = await this.tags.find({});
    return tags.map(this.convertTagDocumentToGetTagDto)
  }

  public async removeTag(id: string): Promise<void> {
    const deleteTag: TagDocument | null = await this.tags.findByIdAndDelete(id);
    if(!deleteTag) {
      throw new HttpException('Тег не найден',404)
    }
  }

  private convertTagDocumentToGetTagDto(tag: TagDocument): GetTagDto {
    return {
      id: tag._id.toString(),
      name: tag.name,
      description: tag.description
    }
  }
}