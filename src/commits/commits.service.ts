import { Injectable } from '@nestjs/common';
import { CreateCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';

@Injectable()
export class CommitsService {
  create(createCommitDto: CreateCommitDto) {
    return 'This action adds a new commit';
  }
}
