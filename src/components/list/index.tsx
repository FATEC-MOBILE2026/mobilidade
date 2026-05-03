import React from 'react';
import { styles } from "./styles";
import { FlatList } from 'react-native';

import { Card } from '@/components/card';

interface ListProps {
  data: any[];
  onLoadMore: () => void;
  renderItemContent: (item: any) => React.ReactNode;
}

export function List({ 
  data, 
  onLoadMore, 
  renderItemContent 
}: ListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Card style={styles.cardMargin}>
          {renderItemContent(item)}
        </Card>
      )}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.2}
      contentContainerStyle={styles.container}
    />
  );
}

