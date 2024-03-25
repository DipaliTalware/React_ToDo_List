import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TaskTabs = () => {
  return (
        <Tabs>
          <TabList > 
            <Tab>All Task</Tab>
            <Tab>Active Task</Tab>
            <Tab>Completed Task</Tab>
          </TabList>
      
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
      </Tabs>
  )
    // <div className='flex justify-center mt-10'>
    //     <button className='px-5'>All Task</button>
    //     <button className='px-5'>Active Task</button>
    //     <button className='px-5'>Completed Task</button>
    // </div>

}

export default TaskTabs