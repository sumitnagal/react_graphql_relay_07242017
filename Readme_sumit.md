* http://localhost:3000/ - Web
* http://localhost:3020/graphql - Graphql
* http://localhost:3010/ - Rest

```
  query homePageQuery {
    viewer {
    id
    widgets{
      edges{
        node{
          id
          name
          description
          color
          size
          quantity
        }
      }
    }
  }
}
```

```
query homePageQuery {
  viewer {
    id
    cars{
      edges{
        node{
          id
          make
          model
          color
          price
          year
        }
      }
    }
    
  }
}
```
```
query homePageQuery {
            viewer {
              id
              ...widgetsTable_viewer
            }
          }
          fragment widgetsTable_viewer on Viewer {
  widgets (first: 100) {
    edges{
      node{
        id
        name
        description
        color
        size
        quantity
      }
    }
  }
}
```
```
query homePageQuery {
            viewer {
              id
              ...carsTable_viewer
            }
          }
         
fragment carsTable_viewer on Viewer {
  cars (first: 100){
    edges{
      node{
        id
        make
        model
        color
        price
        year
      }
    }
  }
}
```
```
query homePageQuery {
            viewer {
              id
              ...widgetsTable_viewer
              ...carsTable_viewer
            }
          }
          fragment widgetsTable_viewer on Viewer {
  widgets (first: 100) {
    edges{
      node{
        id
        name
        description
        color
        size
        quantity
      }
    }
  }
}
fragment carsTable_viewer on Viewer {
  cars (first: 100){
    edges{
      node{
        id
        make
        model
        color
        price
        year
      }
    }
  }
}
```
```
query homePageQuery {
            viewer {
              id
              ...widgetsTable_viewer
            }
          }
          
fragment widgetsTable_viewer on Viewer{
            widgets(last: 2){
              edges{
                node{
                  id
                  ...widgetsViewRow_widget
                }
              }
            }
          }

fragment widgetsViewRow_widget on Widget {
        id
        name
        description
        color
        size
        quantity
  }
          
```
```
query homePageQuery {
            viewer {
              id
              ...widgetsTable_viewer
              ...carsTable_viewer
            }
          }
          
fragment widgetsTable_viewer on Viewer{
            widgets(last: 2){
              edges{
                node{
                  id
                  ...widgetsViewRow_widget
                }
              }
            }
          }
          

fragment widgetsViewRow_widget on Widget {
        id
        name
        description
        color
        size
        quantity
  }
  
 fragment carsTable_viewer on Viewer {
  cars (first: 100){
    edges{
      node{
        id
        ...carsViewRow_car
      }
    }
  }
}

fragment carsViewRow_car on Car {
        id
        model
        make
        price
        year
        color
  }         
  ```
  * Mutation - Insert
  ```
  mutation insertWidgetMutation(
  $input: InsertWidgetInput!
) {
  insertWidget(input: $input) {
    viewer {
      id
    }
    widgetEdge {
      node {
        __typename
        id
        name
        description
        color
        size
        quantity
      }
      cursor
    }
  }
}
```
* Mutation - Insert - variable
```
  {
    "input": {
        "widget": {
            "name": "b",
            "description": "b",
            "color": "b",
            "size": "b",
            "quantity": 4
        },
        "clientMutationId": "0"
    }
}
```
  * Mutation - DELETE
```
mutation insertWidgetMutation(
  $input: InsertWidgetInput!
) {
  insertWidget(input: $input) {
    viewer {
      id
    }
    widgetEdge {
      node {
        __typename
        id
        name
        description
        color
        size
        quantity
      }
      cursor
    }
  }
}
```
  * Mutation - DELETE - variable
```
{
    "input": {
        "widgetId": "V2lkZ2V0OjU=",
        "clientMutationId": "4"
    }
}
```
  * Mutation - DELETE 
```
mutation deleteCarMutation(
  $input: DeleteCarInput!
) {
  deleteCar(input: $input) {
    viewer {
      id
    }
    car {
      id
      model
      make
      color
      price
      year
    }
  }
}
```
  * Mutation - DELETE Car - variable
```
{
    "input": {
        "carId": "Q2FyOjQ=",
        "clientMutationId": "0"
    }
}
```