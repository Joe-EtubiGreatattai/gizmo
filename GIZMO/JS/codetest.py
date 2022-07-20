typeOf = input("Moving average/Single year: ").lower()


if typeOf == 'moving average':
    typeOf = 1
elif typeOf == 'Single year':
    typeOf = 2
else:
print("error")


dataValue = input("Data Value: ").lower()
print(dataValue)


lowerCl = input("Lower Cl: ").lower()
print(lowerCl)


units = input("The unit ..Injuries,Per 100,000 people,Per 100,000 FTEs: ").lower()
if units == 'Injuries':
    units = 1
elif units == 'Per 100,000 people':
    units = 2
elif units == 'Per 100,000 FTEs':
    units = 3
else:
    print("error")
print(units)


indicator = input("Indicator ..Number, Age-standardised rate, Rate per billion km, Rate per thousand registered vehicles").lower()
if indicator == 'Number':
    indicator = 1
elif indicator == 'Age-standardised rate':
    indicator = 2
elif indicator == 'Rate per billion km':
    indicator = 3
elif indicator == 'Rate per thousand registered vehicles':
    indicator = 4
else:
    print("error")
    

cause = input("Indicator ..Number, Age-standardised rate, Rate per billion km, Rate per thousand registered vehicles").lower()
if cause == 'Number':
    cause = 1
elif cause == 'Age-standardised rate':
    cause = 2
elif cause == 'Rate per billion km':
    cause = 3
elif cause == 'Rate per thousand registered vehicles':
    cause = 4
else:
    print("error")
    
    
population = input("Indicator ..Number, Age-standardised rate, Rate per billion km, Rate per thousand registered vehicles").lower()
if population == 'Number':
    population = 1
elif population == 'Age-standardised rate':
    population = 2
elif population == 'Rate per billion km':
    population = 3
elif population == 'Rate per thousand registered vehicles':
    population = 4
else:
    print("error")