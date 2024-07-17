import React, { useState, useContext, useMemo } from 'react';
import { CoverView, View } from '@ray-js/ray';
import styles from './index.module.less';

interface ITabBarProps {
  defaultIndex: number;
  tabsStyle: any;
  renderTabs: () => void;
  renderTabPanel: () => void;
  onChange: (index: number) => void;
}

const TabsContext = React.createContext({});

export const Tab = ({ onClick, children, isSelected, tabStyle, selectedStyle }) => {
  return (
    <CoverView
      className={isSelected ? styles.tabListItemSelected : styles.tabListItem}
      style={isSelected ? selectedStyle : tabStyle}
      onClick={onClick}
    >
      <View className={styles.tabListItemContent}>{children}</View>
    </CoverView>
  );
};

export const TabList = ({ children, tabWrapperStyle }) => {
  const context = useContext(TabsContext);
  const style = tabWrapperStyle || {};
  return (
    <View className={styles.tabList} style={style}>
      {React.Children.map(children, (child, index) => {
        const element = React.cloneElement(child, {
          onClick: () => {
            context.setSelectedIndex(index);
            context.onChange(index);
          },
          isSelected: index === context.selectedIndex,
        });
        return element;
      })}
    </View>
  );
};

export const TabPanels = ({ children, tabPanelsStyle }) => {
  const context = useContext(TabsContext);

  return (
    <View className={styles.tabPanels} style={tabPanelsStyle || {}}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          key: JSON.stringify(context),
          isSelected: index === context.selectedIndex,
        });
      })}
    </View>
  );
};

export const TabPanel = ({ children, isSelected, tabPanelStyle }) => {
  if (!isSelected) return null;
  return (
    <CoverView className={styles.tabPanelItem} style={tabPanelStyle || {}}>
      {children}
    </CoverView>
  );
};

export const Tabs = ({ children, defaultIndex, onChange, tabsStyle }) => {
  const [selectedIndex, setSelectedIndex] = useState(
    typeof defaultIndex === 'number' ? defaultIndex : 0
  );
  const context = useMemo(() => ({ selectedIndex, setSelectedIndex, onChange }), [
    selectedIndex,
    setSelectedIndex,
    onChange,
  ]);
  return (
    <View className={styles.tabs} style={tabsStyle}>
      <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
    </View>
  );
};

const TabBar: React.FC<ITabBarProps> = props => {
  const { defaultIndex = 0, renderTabs, renderTabPanel, tabsStyle, onChange } = props;
  const content = [renderTabs(), renderTabPanel()];
  const clickFn =
    onChange ||
    ((index: number) => {
      console.log(index);
    });
  return (
    <Tabs defaultIndex={defaultIndex} onChange={clickFn} tabsStyle={tabsStyle || {}}>
      {content}
    </Tabs>
  );
};

export default TabBar;
