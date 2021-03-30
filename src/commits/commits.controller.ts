import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from './dto/create-commit.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Post()
  async create(@Body() createCommitDto: CreateCommitDto) {
    return await this.commitsService.create(createCommitDto);
  }
}
