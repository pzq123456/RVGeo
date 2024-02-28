# Math
This code defines several functions for working with vectors in both Cartesian and spherical coordinate systems:

1. Coordinate Conversion:

spherical(cartesian): This function takes a 3D Cartesian vector [x, y, z] and converts it to spherical coordinates [theta, phi].
theta: The azimuthal angle (longitude) in radians, calculated using atan2(y, x).
phi: The polar angle (latitude) in radians, calculated using asin(z).

cartesian(spherical): This function takes a 2D spherical vector [theta, phi] and converts it back to Cartesian coordinates [x, y, z].
x: Calculated using cos(phi) * cos(theta).
y: Calculated using cos(phi) * sin(theta).
z: Calculated using sin(phi).

2. Vector Operations:

cartesianDot(a, b): This function calculates the dot product of two 3D Cartesian vectors a and b.
cartesianCross(a, b): This function calculates the cross product of two 3D Cartesian vectors a and b.
cartesianAddInPlace(a, b): This function adds two 3D Cartesian vectors a and b, modifying a in-place to store the result. (Note: This function is incomplete as it doesn't return the sum)
cartesianScale(vector, k): This function scales a 3D Cartesian vector vector by a factor k, returning a new scaled vector.
cartesianNormalizeInPlace(d): This function normalizes a 3D Cartesian vector d in-place, modifying d to represent a unit vector pointing in the same direction. (Note: This function is incomplete and requires implementing square root calculation)
Improvements:

cartesianAddInPlace: Modify the function to return the sum of the two vectors instead of modifying the input vector in-place.
cartesianNormalizeInPlace: Implement the missing square root calculation (sqrt) and consider returning a new normalized vector instead of modifying the input in-place.
Overall, this code provides a good foundation for working with vectors in both systems. The improvements mentioned can enhance the functionality and clarity of the code.