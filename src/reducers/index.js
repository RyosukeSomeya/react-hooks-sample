// action = {
//   type: 'CREATE_EVENT',
//   title: 'イベントタイトル'
//   body: 'イベント内容...'
// }
// 状態がない場合
// # before
// state = []

// # after
// state = [
//  {id=1, title: 'タイトル1', body: 'ボディ1'}
// ]

// 状態がある場合
// # before
// state = [
//  {id=1, title: 'タイトル1', body: 'ボディ1'},
//  {id=2, title: 'タイトル2', body: 'ボディ2'},
//  {id=3, title: 'タイトル3', body: 'ボディ3'},
// ]

// after
// state = [
//  {id=1, title: 'タイトル1', body: 'ボディ1'},
//  {id=2, title: 'タイトル2', body: 'ボディ2'},
//  {id=3, title: 'タイトル3', body: 'ボディ3'},
//  {id=4, title: 'タイトル4', body: 'ボディ4'},
// ]

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      // 新しく設定するイベントのidを設定
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;
