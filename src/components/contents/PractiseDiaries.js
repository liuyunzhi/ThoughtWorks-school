import { Layout } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import NewDiary from './NewDiary';

const { Content } = Layout;

const PractiseDiaries = ({ addDiaryHandle }) => {
  return (
    <div>
      <NewDiary addDiaryHandle={addDiaryHandle} />
    </div>
  );
}

const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch) => ({
  addDiaryHandle: (date, content) => {
    dispatch(
      {
        type: 'ADD_DIARY',
        data: {
          date: date,
          content: content
        }
      }
    )
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PractiseDiaries);
