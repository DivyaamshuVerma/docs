##### **Operators:**



There are Arithmetic, Logical and relational type of operators available in Snowflake.



###### **Arithmetic Operators:**



Below mentioned arithmetic operators can be used in anyﾠDSL code writtenﾠin expression editor available at page, flow, object, object model level.



|Operation|Symbol|
|-|-|
|Add|+|
|Subtract|-|
|Multiply|\*|
|Divide|/|
|Percentage|%|
|Mod|mod|



**Examples:**



Example 1



def x as 10

return x+10



\#Output above snowflake codes is 20.



or



def x as 10

x=x+10

return x



\#Output above snowflake codes is 20.



Example 2



def x, z as 30

def y as 20

x = y+z

return x



\#Output of above snowflake code is 50.



###### **Relational Operators:**



Relational operators allow the user to compare values for equality. For relational operators, the words and/or symbols can be used as mentioned in table below.



|Words|Symbol|
|-|-|
|equals to|=|
|not equals to|<>|
|greater than|>|
|greater than equals to|>=|
|less than|<|
|less than equals to|<=|



**Examples:**



Example Use of  =



def x as 10

def y

if x = 10

then y = 20

end

return y



Output of above DSL code should be: 20



Example Use of >



def x as 10

def y

if x > 9

then y =11

end

return y



Output of above DSL code should be: 11



Example Use of >=



def x as 10

def y

if x >= 10

then y = 11

end

return y



Output of above DSL code should be: 11



Example Use of <>



def x as 10

def y

if x <> 11

then y =11

end

return y



Output of above DSL code should be: 11



Example Use of <



def x as 10

def y

if x < 11

then y =11

end

return y



Output of above DSL code should be: 11



Example Use of <=



def x as 10

def y

if x <= 10

then y = 11

end

return y



Output of above DSL code should be: 11



###### **Logical Operators:**



For logical operators must be expressed as word and not in symbol. The words can be used as mentioned below in any DSL code written in expression editor available at page, flow, object, object model level.



|Logical Operators|
|-|
|or|
|and|



**Examples:**



Example#1 Use of and operator in if else if block



def x, y as 10

if x = null and y < 10 then

x = 1

else

if y >= 10 and y < 15 then

x = 2

end

end

return x



\# Result of above execution block will be 2



Example#2 Use of and



def x as 10 def y if x < 20 and x >= 10

then return "x is less than 20 and greater than equal to 10"

end



Example#3 Use of or operator 



def x as 10 def y if x < 10 or x >= 10

then return "x is less than 10 or greater than equal to 10"

end



###### **Special Keywords:**



Special keywords are used along with relational operators for comparison



|Keyword|Description|
|-|-|
|null|null keyword specifies empty value for a variable|



Null keyword can be use in relational operation to compare whether variables/model variable

value is empty.



if This.Coverage\[Code="BI"] = null then

&#x20;def cov as new Policy:PersonalAuto.Vehicle.Coverage

&#x20;cov.Description = "Bodily Injury"

&#x20;cov.Code = "BI"

&#x20;This.Coverage = cov

end 







































