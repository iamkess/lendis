import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Post()
  create(@Body() createCommitDto: CreateCommitDto) {
    console.log(createCommitDto);
    
    return this.commitsService.create(createCommitDto);
  }
}
