export type JsonTodoType={
    todos:TodoType[];
    total: number;
    skip: number;
    limit: number;
}
export type TodoType={
	todo: string;
	id: number;
	completed: boolean;
	userId: number;
}

