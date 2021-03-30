export class AuthorDto {
    name: string;
    email: string;
    username: string;
}
export class CommitDto {
    id: string;
    message: string;
    timestamp: string;
    url: string;
}
export class CreateCommitDto {
    commits: Array<CommitDto>;
    author: AuthorDto;
}    
