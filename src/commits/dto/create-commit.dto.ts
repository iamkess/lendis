import { IsString, IsInt } from 'class-validator';

export class AuthorDto {
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsString()
    username: string;
}
export class CommitDto {
    @IsString()
    id: string;
    @IsString()
    message: string;
    @IsString()
    timestamp: string;
    @IsString()
    url: string;
    @IsString()
    author: AuthorDto;
}
export class CreateCommitDto {
    commits: Array<CommitDto>;
}    
