INSERT INTO users(id, name)
VALUES
(1, 'Tom'),
(2, 'Jerry');

INSERT INTO lists(id, title, author_id)
VALUES
(11, 'list11', 1),
(12, 'list12', 1),
(13, 'list13', 2);

INSERT INTO todos(title, date, list_id)
VALUES
('todo1', '2021-04-10', 11),
('todo11', '2021-04-10', 11),
('todo111', '2021-05-10', 11),
('todo2', '2021-04-10', 12),
('todo3', '2021-04-10', 13);

