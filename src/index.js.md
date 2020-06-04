This is and example

<!-- Auto Generated Below -->

## Classes

<dl>
<dt><a href="#Person">Person</a></dt>
<dd><p>Class to create a person object</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#studentName">studentName</a> : <code>string</code></dt>
<dd><p>Student Name</p>
</dd>
<dt><a href="#grades">grades</a> : <code>Array.&lt;number&gt;</code></dt>
<dd><p>Array of grades</p>
</dd>
<dt><a href="#todo">todo</a> : <code>Object</code></dt>
<dd><p>Todo object</p>
</dd>
<dt><a href="#student">student</a> : <code><a href="#Student">Student</a></code></dt>
<dd></dd>
<dt><a href="#person1">person1</a></dt>
<dd><p>See <a href="#Person">Person</a></p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#calculateTax">calculateTax(amount, tax)</a> ⇒ <code>string</code></dt>
<dd><p>Calculate tax</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Student">Student</a> : <code>Object</code></dt>
<dd><p>A student</p>
</dd>
</dl>

<a name="Person"></a>

## Person
Class to create a person object

**Kind**: global class  

* [Person](#Person)
    * [new Person(personInfo)](#new_Person_new)
    * [.name](#Person+name)
    * [.age](#Person+age)
    * [.greet()](#Person+greet) ⇒

<a name="new_Person_new"></a>

### new Person(personInfo)

| Param | Type | Description |
| --- | --- | --- |
| personInfo | <code>Object</code> | Information about the person |

<a name="Person+name"></a>

### person.name
**Kind**: instance property of [<code>Person</code>](#Person)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Persons name |

<a name="Person+age"></a>

### person.age
**Kind**: instance property of [<code>Person</code>](#Person)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| age | <code>string</code> | Persons age |

<a name="Person+greet"></a>

### person.greet() ⇒
**Kind**: instance method of [<code>Person</code>](#Person)  
**Returns**: void  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| greet | <code>function</code> | A greeting with the name and age |

<a name="studentName"></a>

## studentName : <code>string</code>
Student Name

**Kind**: global constant  
<a name="grades"></a>

## grades : <code>Array.&lt;number&gt;</code>
Array of grades

**Kind**: global constant  
<a name="todo"></a>

## todo : <code>Object</code>
Todo object

**Kind**: global constant  
<a name="student"></a>

## student : [<code>Student</code>](#Student)
**Kind**: global constant  
<a name="person1"></a>

## person1
See [Person](#Person)

**Kind**: global constant  
<a name="calculateTax"></a>

## calculateTax(amount, tax) ⇒ <code>string</code>
Calculate tax

**Kind**: global function  
**Returns**: <code>string</code> - - Total with a dollar sign  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | Total amount |
| tax | <code>number</code> | Tax percentage |

<a name="Student"></a>

## Student : <code>Object</code>
A student

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Student ID |
| name | <code>string</code> | Student name |
| [age] | <code>string</code> \| <code>number</code> | Student age (optional) |
| isActive | <code>boolean</code> | Student is active |

