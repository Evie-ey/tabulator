import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import {Tab} from '../Tab'
import {TabPane} from '../TabPane'
// ******************Testing*******************
it('Tab component matches snapshot', () => {
  const view = render(
    <div>
      <h1>Tabulator</h1>
       <Tab initialActive={1}>
        <TabPane title="Kampala" >
        <div className="tab-content">
             <p>Tab 1 </p>
           </div>
        </TabPane>
        <TabPane title='India' >
          <div className="tab-content">
             <p>Tab 2</p>
           </div>
        </TabPane>
      </Tab>
    </div>
  );
  expect(view).toMatchSnapshot()
})

// ******************Testing*******************
it("Component will always render without crashing", () => {

  render(
    <div>
      <h1>Tabulator</h1>
       <Tab initialActive={1}>
        <TabPane title="Kampala" >
        <div className="tab-content">
             <p>Tab 1 </p>
           </div>
        </TabPane>
        <TabPane title='India' >
          <div className="tab-content">
             <p>Tab 2</p>
           </div>
        </TabPane>
      </Tab>
    </div>
  );
})
// ******************Testing*******************
it("Component displays pane when initialActive=0", ()=> {
  render(
    <div>
      <h1>Tabulator</h1>
       <Tab initialActive={0}>
        <TabPane title="Kampala" >
        <div className="tab-content">
             <p>Tab 1</p>
           </div>
        </TabPane>
        <TabPane title='India' >
          <div className="tab-content">
             <p>Tab 2</p>
           </div>
        </TabPane>
      </Tab>
    </div>
  );
  const test_content = screen.getByTestId("content");
  expect(test_content.textContent).toBe("Tab 1")

})
// ******************Testing*******************
it("Sets initial atb using active", ()=> {
  render(
    <div>
      <h1>Tabulator</h1>
       <Tab active='India' onActiveChange={()=> ''}>
        <TabPane title="Kampala" >
        <div className="tab-content">
             <p>Tab 1</p>
           </div>
        </TabPane>
        <TabPane title='India' >
          <div className="tab-content">
             <p>Tab 2</p>
           </div>
        </TabPane>
      </Tab>
    </div>
  );
  const test_content = screen.getByTestId("content");
  expect(test_content.textContent).toBe("Tab 2")
})
// ******************Testing*******************
it("Clicking from one tab to another dispalys the correct content", ()=>{
  render(
    <div>
      <h1>Tabulator</h1>
       <Tab active='India' onActiveChange={()=> ''}>
        <TabPane title="Kampala" >
        <div className="tab-content">
             <p>This is one</p>
           </div>
        </TabPane>
        <TabPane title='India' >
          <div className="tab-content">
             <p>This is two</p>
           </div>
        </TabPane>
      </Tab>
    </div>
  );

  // Inital tab->inida,a and content->This is two

  let content = screen.getByTestId("content")
  expect(content.textContent).toBe("This is two")
  // our active button
  const tab_button = screen.getByTestId("India");
  expect(tab_button).toHaveClass("active");

  // tab we are chnagin to
  const test_tab = screen.getByTestId("Kampala");
  fireEvent.click(test_tab)

  // Expect now active button to have class active
  const test_tab_button = screen.getByTestId("Kampala")
  expect(test_tab_button).toHaveClass("active")

  content = screen.getByTestId("content");
  expect(content.textContent).toBe("This is one")

})

