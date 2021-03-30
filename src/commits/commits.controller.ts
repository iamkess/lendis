import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Post()
  create(@Req() req: Request) {
    console.log(req.body);    
    return this.commitsService.create(req);
  }
}
