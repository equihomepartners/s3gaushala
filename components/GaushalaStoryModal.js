import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Divider,
  VStack,
  HStack,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const GaushalaStoryModal = ({ isOpen, onClose }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const headingColor = useColorModeValue('orange.500', 'orange.300')
  const accentColor = useColorModeValue('orange.100', 'orange.900')

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent bg={bgColor} borderRadius="2xl">
        <ModalHeader>
          <VStack spacing={2} align="start">
            <Heading size="xl" color={headingColor} fontWeight="bold">
              The Sacred Haven: Gaushalas in Sanatana Dharma
            </Heading>
            <Text fontSize="sm" color="gray.500">
              A timeless tale of divine connection and spiritual significance
            </Text>
          </VStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={8}>
          <VStack spacing={8} align="stretch">
            <Box p={6} bg={accentColor} borderRadius="xl">
              <HStack spacing={2}>
                <Icon as={FaQuoteLeft} color={headingColor} />
                <Text fontSize="lg" color={textColor} fontStyle="italic" textAlign="center">
                  "In Sanatana Dharma, the cow is no ordinary being. She is Gau Mata—Mother Cow—a living embodiment of divinity."
                </Text>
                <Icon as={FaQuoteRight} color={headingColor} />
              </HStack>
            </Box>

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                The Story of Pandit Vishnudatta
              </Heading>
              <Text color={textColor} mb={4}>
                Under the sprawling branches of a banyan tree in a Himalayan village, Pandit Vishnudatta sat with his students, the soft glow of dusk illuminating the nearby Gaushala. The cows grazed peacefully, their gentle presence a quiet hum in the evening air.
              </Text>
              <Text color={textColor}>
                Young Arjun, ever curious, raised his hand. "Panditji, why do we honor cows so much? What makes the Gaushala so vital in our Dharma and our lives?"
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                Divine Wisdom from the Vedas
              </Heading>
              <VStack spacing={4} align="stretch">
                <Text color={textColor}>
                  "The Rigveda (10.87.16) hails the cow as a gift from the gods, a symbol of wealth and purity. But it goes deeper. The Atharvaveda (11.1.34) and texts like the Skanda Purana tell us that within Gau Mata represents the 33 crore Devi-Devatas—the countless divine beings of our cosmos."
                </Text>
                <Box pl={4} borderLeft="4px solid" borderColor={headingColor}>
                  <Text color={textColor}>
                    • Every hair on Gau Mata's body is a channel to a Devi or Devata
                  </Text>
                  <Text color={textColor}>
                    • Serving her aligns us with 33 crore divine energies
                  </Text>
                  <Text color={textColor}>
                    • Her presence purifies the land and amplifies our yagnas
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                Practical and Spiritual Benefits
              </Heading>
              <VStack spacing={4} align="stretch">
                <Text color={textColor}>
                  "The Yajurveda says the cow sustains life—her milk nourishes us, her dung and urine, as per the Charaka Samhita, heal us through Ayurvedic remedies. Her presence purifies the land and amplifies our yagnas, as the Shatapatha Brahmana declares."
                </Text>
                <Box pl={4} borderLeft="4px solid" borderColor={headingColor}>
                  <Text color={textColor}>
                    • Milk provides nourishment and strength
                  </Text>
                  <Text color={textColor}>
                    • Dung and urine have medicinal properties
                  </Text>
                  <Text color={textColor}>
                    • Her presence purifies the environment
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                The Eternal Truth
              </Heading>
              <Text color={textColor}>
                "The truth of Sanatana Dharma never fades. Even now, a Gaushala is a sanctuary of balance. Her dung still enriches our fields, her milk still strengthens our bodies, and her calm gaze still soothes our minds. Modern people might call it ecology or therapy, but we know it as dharma."
              </Text>
            </Box>

            <Divider />

            <Box p={6} bg={accentColor} borderRadius="xl">
              <Text color={textColor} fontSize="lg" textAlign="center" fontStyle="italic">
                "She asks for so little—only care and respect. Yet in serving her, we serve the 33 crore Devi-Devatas, and they guide us to health, harmony, and liberation."
              </Text>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GaushalaStoryModal 