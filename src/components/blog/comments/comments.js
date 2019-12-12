import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'


const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    //header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
    className="comment-list"
  />
);

const Editor = ({ onChange, onSubmit, submitting, author, comment }) => (
  <div>
    <Form.Item className="form-comment-input">
      <Input id="author" placeholder="Name lastname" onChange={onChange} author={author} />
    </Form.Item>
    <Form.Item className="form-comment-input">
      <TextArea id="comment" placeholder="Comment" rows={4} onChange={onChange} comment={comment} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit}>
        Send
      </Button>
    </Form.Item>
  </div>
);
const commentActions = <div className="comment-actions"><span><FiChevronUp />|<FiChevronDown /></span> <button>Responder</button> <button>Compartir</button> </div>;
class Comments extends React.Component {
  state = {
    comments: [
      {
        author: 'Evelio Gutierrez',
        avatar: require('../../../assets/img/evelio.jpg'),
        content: <>Donec ultricies eros vel risus convallis ultricies. Proin sed facilisis tortor. Nam vel augue dapibus, posuere arcu ut, finibus orci. Integer a magna et tortor vehicula feugiat eget convallis felis. Etiam mattis nisl et justo molestie imperdiet. {commentActions}</>,
      },
      {
        author: 'Comentario anónimo',
        avatar: require('../../../assets/img/comment-1.jpg'),
        content: <>Donec ultricies eros vel risus convallis ultricies. Proin sed facilisis tortor. Nam vel augue dapibus, posuere arcu ut, finibus orci. Integer a magna et tortor vehicula feugiat eget convallis felis. Etiam mattis nisl et justo molestie imperdiet. {commentActions}</>,
      }
    ],
    submitting: false,
    comment: '',
    author: '',
  };

  handleSubmit = () => {
    if (!this.state.comment) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        comment: '',
        author: '',
        comments: [
          {
            author: this.state.author,
            avatar: require('../../../assets/img/making-hot.jpg'),
            content: <><p>{this.state.comment}</p> commentActions</>,
            // datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    (e.target.id === 'author') ? this.setState({ author: e.target.value }) : this.setState({ comment: e.target.value });
  };

  render() {
    const { comments, submitting, comment, author } = this.state;

    return (
      <div className="comments-component">
        <h2>COMMENTS</h2>
        <Comment
          avatar={
            <Avatar
              src={require('../../../assets/img/making-hot.jpg')}
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              comment={comment}
              author={author}
            />
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </div>
    );
  }
}
export default Comments;